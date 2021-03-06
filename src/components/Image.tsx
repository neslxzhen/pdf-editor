import React, { createRef, CSSProperties, forwardRef, MutableRefObject, RefObject, useEffect, useState } from 'react';
import { Rnd, RndDragCallback, RndResizeCallback } from 'react-rnd';
import { scaleTo } from '../utils/helpers';
import { DraggableSyntheticListeners, Translate } from '@dnd-kit/core';

interface Props {
  img: HTMLImageElement;
  width?: number;
  height?: number;
  style?: CSSProperties,
  listeners?: DraggableSyntheticListeners;
  draggableAttrs?: object;
  desc?: string;
}

export const Image = forwardRef<HTMLImageElement, Props>((
  {
    width,
    height,
    img,
    style,
    listeners,
    draggableAttrs,
    desc,
  },
  ref
)=> {

  return (
    <img
      style={{
        width: width || "100%" ,
        height: height || "100%" ,
        cursor: 'move',
        ...style,
      }}
      src={img.src}
      ref={ref}
      {...listeners}
      {...draggableAttrs}
      alt={desc}
    />
  );
  }
);

