import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ButtonHTMLAttributes, ReactElement, ReactNode, cloneElement } from 'react'

const inter = Inter({ subsets: ['latin'] })

interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
    icon?: ReactElement,
    variant?: 'default' | 'transparent' | 'submit' | 'proceed' | 'cancel',
    defaultStyle?: string,
    size?: 'default' | 'small'
}

export const Button = (props:ButtonsProps ) => {
  const {variant} = props

  const style = "rounded-md font-bold flex justify-center items-center gap-3 p-2"

    switch(variant) {
      case 'transparent' : 
      return <TransparentButton {...props} defaultStyle={style} size={props?.size ?? 'default'}/>
      case 'submit' : 
      return <SubmitButton {...props}  defaultStyle={style} size={props?.size ?? 'default'}/>
      case 'proceed' : 
      return <ProceedButton {...props}  defaultStyle={style} size={props?.size ?? 'default'}/>
      case 'cancel' : 
      return <CancelButton {...props}  defaultStyle={style} size={props?.size ?? 'default'}/>
      default:
        return <DefaultButton {...props} defaultStyle={style} size={props?.size ?? 'default'}/>
    }
 

  
};


export const DefaultButton = (props : ButtonsProps ) => {
 let {children, icon, defaultStyle, size} = props;

  if(size === 'default') defaultStyle+= ' w-52'
  return (
    <button 
    {...props}
    className={`${defaultStyle} border-2 border-slate-300 text-white text-2xl`}>
     <span className="text-center my-auto">{children}</span>
    {icon && cloneElement(icon, { className: "fill-white w-7 h-7"})}
    </button>
     )
}


export const TransparentButton = (props : ButtonsProps ) => {
  let {children, icon, defaultStyle, size} = props;

  if(size === 'default') defaultStyle+= ' w-52'
  return (
    <button 
    {...props}
    className={`${defaultStyle}  text-white text-2xl`}>
     <span className="text-center my-auto">{children}</span>
    {icon && cloneElement(icon, { className: "fill-white w-7 h-7"})}
    </button>
     )
}

export const SubmitButton = (props : ButtonsProps ) => {
  let {children, icon, defaultStyle, size} = props;

  if(size === 'default') defaultStyle+= ' w-52'
  return (
    <button 
    {...props}
    className={`${defaultStyle} border-2 border-slate-300 text-black text-2xl`}>
     <span className="text-center my-auto">{children}</span>
    {icon && cloneElement(icon, { className: "fill-black w-7 h-7"})}
    </button>
     )
}

export const ProceedButton = (props : ButtonsProps ) => {
  let {children, icon, defaultStyle, size} = props;

  if(size === 'default') defaultStyle+= ' w-52'
  return (
    <button 
    {...props}
    className={`${defaultStyle} border-2 border-slate-300 text-white text-2xl`}>
     <span className="text-center my-auto">{children}</span>
    {icon && cloneElement(icon, { className: "fill-white w-7 h-7"})}
    </button>
     )
}

export const CancelButton = (props : ButtonsProps ) => {
  let {children, icon, defaultStyle, size} = props;

  if(size === 'default') defaultStyle+= ' w-52'
  return (
    <button 
    {...props}
    className={`${defaultStyle} border-2 border-slate-300 text-black text-2xl bg-red-500`}>
     <span className="text-center my-auto">{children}</span>
    {icon && cloneElement(icon, { className: "fill-black w-7 h-7"})}
    </button>
     )
}