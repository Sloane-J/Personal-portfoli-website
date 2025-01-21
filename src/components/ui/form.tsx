"use client"

import type * as React from "react"
import { cn } from "@/utils/cn"

interface FormProps extends React.ComponentPropsWithoutRef<"form"> {
  children: React.ReactNode
}

interface FormFieldProps extends React.ComponentPropsWithoutRef<"div"> {
  label: string
  error?: string
  children: React.ReactNode
}

export function Form({ className, ...props }: FormProps) {
  return <form className={cn("space-y-4", className)} {...props} />
}

export function FormField({ label, error, children, className, ...props }: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      <label className="text-sm font-medium">{label}</label>
      {children}
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  )
}

