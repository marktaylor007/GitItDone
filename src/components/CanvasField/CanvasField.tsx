import { MouseEvent, useEffect, useRef, useState, memo } from "react";
import classes from "./CanvasField.module.scss";

type CanvasFieldProps = {
  label?: string;
  name?: string;
  value: string;
  onInput: (value: string) => void;
};

type Coordinates = {
  x: number;
  y: number;
};

export const CanvasField = memo(
  ({ label, value, onInput }: CanvasFieldProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState<boolean>(false);

    const [previousCoordinates, setPreviousCoordinates] = useState<Coordinates>(
      {
        x: 0,
        y: 0,
      },
    );

    const canvasContext = canvasRef.current?.getContext("2d");

    useEffect(() => {
      if (value) {
        const img = new Image();
        img.onload = () => {
          canvasContext?.drawImage(img, 0, 0);
        };
        img.src = value;
      }
    }, [value, canvasContext]);

    const startDrawing = (event: MouseEvent<HTMLCanvasElement>) => {
      if (!(isDrawing && canvasContext && canvasRef)) {
        return;
      }
      const canvasEl = canvasRef?.current ?? new HTMLCanvasElement();
      const { x: offsetX, y: offsetY } = canvasEl.getBoundingClientRect();

      // get canvas scale
      const scaleX = canvasEl.width / canvasEl.clientWidth;
      const scaleY = canvasEl.height / canvasEl.clientHeight;
      const updatedCoordinates = {
        x: (event.clientX - offsetX) * scaleX,
        y: (event.clientY - offsetY) * scaleY,
      };

      if (previousCoordinates.x === 0 && previousCoordinates.y === 0) {
        setPreviousCoordinates(updatedCoordinates);
        return;
      }

      canvasContext.fillStyle = "blue";
      canvasContext.lineWidth = 8;
      canvasContext.moveTo(previousCoordinates.x, previousCoordinates.y);
      canvasContext.lineTo(updatedCoordinates.x, updatedCoordinates.y);
      canvasContext.stroke();
      setPreviousCoordinates(updatedCoordinates);
    };

    const enableDrawing = () => setIsDrawing(true);

    const endDrawing = () => {
      setPreviousCoordinates({
        x: 0,
        y: 0,
      });
      setIsDrawing(false);
      onInput(canvasRef.current?.toDataURL() || "");
    };

    return (
      <>
        {label ? <label>{label}</label> : null}
        <canvas
          width="1024"
          height="768"
          className={classes.CanvasField}
          onMouseDown={enableDrawing}
          onMouseUp={endDrawing}
          onMouseMove={startDrawing}
          onMouseLeave={endDrawing}
          ref={canvasRef}
        />
      </>
    );
  },
);
