/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { PropsWithChildren, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { cn } from "@/lib/utils";

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical";
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  "mx-auto w-max mt-8 h-[58px] p-2 flex gap-2 rounded-2xl shadow-md border border-slate-200 supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md dark:border-slate-800 bg-white/10 dark:bg-black/10"
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      direction = "bottom",
      orientation = "horizontal",
      ...props
    },
    ref
  ) => {
    const mousex = useMotionValue(Infinity);
    const mousey = useMotionValue(Infinity);

    const handleMouseMove = (e: React.MouseEvent) => {
      if (orientation === "horizontal") {
        mousex.set(e.clientX);
      } else {
        mousey.set(e.clientY);
      }
    };

    const handleMouseLeave = (e: React.MouseEvent) => {
      // Check if we're moving to a child element
      const relatedTarget = e.relatedTarget as HTMLElement;
      if (relatedTarget?.closest(".dock-container")) {
        return;
      }

      if (orientation === "horizontal") {
        mousex.set(Infinity);
      } else {
        mousey.set(Infinity);
      }
    };

    const renderChildren = () => {
      return React.Children.map(children, (child: any) => {
        return React.cloneElement(child, {
          mousex: mousex,
          mousey: mousey,
          magnification: magnification,
          distance: distance,
        });
      });
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => {
          if (orientation == "horizontal") {
            mousex.set(e.clientX);
          } else {
            mousey.set(e.clientY);
          }
        }}
        onMouseLeave={() => {
          if (orientation == "horizontal") {
            mousex.set(Infinity);
          } else {
            mousey.set(Infinity);
          }
        }}
        {...props}
        className={cn(dockVariants({ className }), {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom",
          "flex-col h-max": orientation === "vertical",
          "flex-row": orientation === "horizontal",
        })}
      >
        {renderChildren()}
      </motion.div>
    );
  }
);

Dock.displayName = "Dock";

export interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  mousex?: any;
  mousey?: any;
  className?: string;
  children?: React.ReactNode;
  props?: PropsWithChildren;
  orientation?: "horizontal" | "vertical";
}

const DockIcon = ({
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mousex,
  mousey,
  className,
  children,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const distanceHeightCalc = useTransform(mousey, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };

    return val - bounds.y - bounds.height / 2;
  });

  const distanceWidthCalc = useTransform(mousex, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const heightSync = useTransform(
    distanceHeightCalc,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  const widthSync = useTransform(
    distanceWidthCalc,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  const height = useSpring(heightSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ height, width }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
