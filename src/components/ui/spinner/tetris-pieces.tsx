import { forwardRef, ForwardedRef } from 'react';
import './styles.css';

interface PieceProps {
  className?: string;
}

export const IPiece = forwardRef<HTMLDivElement, PieceProps>(
  ({ className }, ref: ForwardedRef<HTMLDivElement>) => (
    <div ref={ref} className={`iPiece ${className}`}>
      <div />
    </div>
  )
);

IPiece.displayName = 'IPiece';

export const JPiece = forwardRef<HTMLDivElement, PieceProps>(
  ({ className }, ref: ForwardedRef<HTMLDivElement>) => (
    <div ref={ref} className={`jPiece ${className}`}>
      <div />
      <div />
    </div>
  )
);

JPiece.displayName = 'JPiece';

export const LPiece = forwardRef<HTMLDivElement, PieceProps>(
  ({ className }, ref: ForwardedRef<HTMLDivElement>) => (
    <div ref={ref} className={`lPiece ${className}`}>
      <div />
      <div />
    </div>
  )
);

LPiece.displayName = 'LPiece';

export const OPiece = forwardRef<HTMLDivElement, PieceProps>(
  ({ className }, ref: ForwardedRef<HTMLDivElement>) => (
    <div ref={ref} className={`oPiece ${className}`}>
      <div />
    </div>
  )
);

OPiece.displayName = 'OPiece';

export const SPiece = forwardRef<HTMLDivElement, PieceProps>(
  ({ className }, ref: ForwardedRef<HTMLDivElement>) => (
    <div ref={ref} className={`sPiece ${className}`}>
      <div />
      <div />
    </div>
  )
);

SPiece.displayName = 'SPiece';

export const TPiece = forwardRef<HTMLDivElement, PieceProps>(
  ({ className }, ref: ForwardedRef<HTMLDivElement>) => (
    <div ref={ref} className={`tPiece ${className}`}>
      <div />
      <div />
    </div>
  )
);

TPiece.displayName = 'TPiece';

export const ZPiece = forwardRef<HTMLDivElement, PieceProps>(
  ({ className }, ref: ForwardedRef<HTMLDivElement>) => (
    <div ref={ref} className={`zPiece ${className}`}>
      <div />
      <div />
    </div>
  )
);

ZPiece.displayName = 'ZPiece';
