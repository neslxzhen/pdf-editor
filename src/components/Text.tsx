import React, { CSSProperties, FocusEventHandler, forwardRef } from 'react';
import classNames from 'classnames';
import type {DraggableSyntheticListeners, Translate} from '@dnd-kit/core';

interface Props {
  border?: boolean;
  dragOverlay?: boolean;
  dragging?: boolean;
  listeners?: DraggableSyntheticListeners;
  translate?: Translate;
  text?: string;
  editing: boolean;
  width: number;
  height: number;
  onDoubleClick?: () => void;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  draggableAttrs: object;
  size?: number;
  lineHeight?: number;
  fontFamily?: string;
}

export const Text = forwardRef<HTMLInputElement, Props>((
    {
      border = true,
      dragOverlay,
      dragging,
      listeners,
      translate,
      onBlur,
      onChangeText,
      editing,
      height,
      text,
      onDoubleClick,
      draggableAttrs,
      size,
      lineHeight,
      fontFamily,
    },
    ref
  )=> {

  let borderStyle: CSSProperties = {
    borderWidth: '0.3px',
    borderColor: 'gray',
    borderStyle: editing? 'solid': 'dashed'
  }
  if(dragging) borderStyle = {};

  return (
      <div
        style={{
          position: "absolute",
          'left': `${translate?.x ?? 0}px`,
          'top': `${translate?.y ?? 0}px`,
        }}
        onDoubleClick={onDoubleClick}
      >

        <input
          type="text"
          onBlur={onBlur}
          ref={ref}
          onChange={onChangeText}
          readOnly={!editing}
          style={{
            fontSize: size,
            lineHeight,
            fontFamily,
            width: '100%',
            height,
            borderStyle: 'none',
            borderWidth: 0,
            outline: 'none',
            padding: 0,
            boxSizing: 'border-box',
            margin: 0,
            backgroundColor: 'transparent',
            cursor: editing ? 'text': 'move' ,
            ...borderStyle,
          }}
          value={text}
          aria-label="Draggable"
          data-cypress="draggable-item"
          {...(editing? {} : listeners)}
          {...(editing? {} : draggableAttrs)}
        />
      </div>
    );
  }
);

