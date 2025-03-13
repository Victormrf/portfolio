import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
import { useDrag } from "@use-gesture/react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 2,
  ...props
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [baseOffset, setBaseOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Continuous animation when not dragging
  useEffect(() => {
    if (!isDragging && (!pauseOnHover || !isHovered)) {
      const animate = () => {
        setBaseOffset((prev) => {
          const step = reverse ? 1 : -1;
          const newOffset = prev + step;
          const contentWidth = containerRef.current?.scrollWidth || 0;
          const containerWidth = containerRef.current?.clientWidth || 0;

          // Reset to 0 if the end of the content reaches the end of the container
          if (Math.abs(newOffset) >= contentWidth - containerWidth) {
            return 0;
          } else {
            return newOffset;
          }
        });
      };

      const interval = setInterval(animate, 20);
      return () => clearInterval(interval);
    }
  }, [isDragging, pauseOnHover, isHovered, reverse, repeat]);

  const bind = useDrag(
    ({ active, movement: [x], first }) => {
      setIsDragging(active);

      if (first) {
        const currentX = baseOffset + dragOffset;
        setBaseOffset(currentX);
        setDragOffset(0);
      }

      if (active) {
        const contentWidth = containerRef.current?.scrollWidth || 0;
        const containerWidth = containerRef.current?.clientWidth || 0;
        const newDragOffset = x % contentWidth;

        // Calculate the potential new position
        const potentialOffset = baseOffset + newDragOffset;

        // Prevent dragging beyond the origin or the limit (left & right limit)
        if (
          potentialOffset > 0 ||
          Math.abs(potentialOffset) >= contentWidth - containerWidth
        ) {
          setBaseOffset(0); // Reset baseOffset to origin
          setDragOffset(0); // Reset dragOffset to origin
        } else {
          setDragOffset(newDragOffset); // Allow dragging within limits
        }
      } else {
        setBaseOffset((prev) => prev + dragOffset);
        setDragOffset(0);
      }
    },
    {
      axis: "x",
      filterTaps: true,
    }
  );

  const totalOffset = baseOffset + dragOffset;

  return (
    <div
      ref={containerRef}
      {...bind()}
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group flex overflow-hidden p-2 cursor-grab active:cursor-grabbing [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat * 2) // Double the repeat to ensure smooth transition
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            style={{
              transform: `translateX(${totalOffset}px)`,
              transition: isDragging ? "none" : "transform 0.05s linear",
            }}
            className={cn(
              "flex shrink-0 justify-around [gap:var(--gap)]",
              "will-change-transform"
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
