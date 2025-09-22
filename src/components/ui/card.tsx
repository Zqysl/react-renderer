import * as React from 'react';

export function Card(props: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`rounded-xl border p-4 ${props.className ?? ''}`}>{props.children}</div>;
}

export function CardHeader(props: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`mb-2 font-semibold ${props.className ?? ''}`}>{props.children}</div>;
}

export function CardContent(props: React.PropsWithChildren<{ className?: string }>) {
  return <div className={props.className}>{props.children}</div>;
}