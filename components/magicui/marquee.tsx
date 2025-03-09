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
  repeat = 4,
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

          // Reset based on direction
          if (reverse) {
            return newOffset >= contentWidth ? 0 : newOffset;
          } else {
            return newOffset <= -contentWidth ? 0 : newOffset;
          }
        });
      };

      const interval = setInterval(animate, 20);
      return () => clearInterval(interval);
    }
  }, [isDragging, pauseOnHover, isHovered, reverse]);

  const bind = useDrag(
    ({ active, movement: [x], first }) => {
      setIsDragging(active);

      if (first) {
        // Capture the current position when starting drag
        const currentX = baseOffset + dragOffset;
        setBaseOffset(currentX);
        setDragOffset(0);
      }

      if (active) {
        setDragOffset(x);
      } else {
        // When drag ends, add dragOffset to baseOffset
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
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            style={{
              transform: `translateX(${totalOffset}px)`,
              transition: isDragging ? "none" : "transform 0.05s linear",
            }}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]")}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
