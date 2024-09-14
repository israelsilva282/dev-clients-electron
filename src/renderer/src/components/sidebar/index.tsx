import * as Collapisible from '@radix-ui/react-collapsible'
import clsx from 'clsx'
import { ArrowBendDoubleUpLeft } from 'phosphor-react'
import { LinkContent } from '../link'

export function Sidebar() {
  const isMacOs = process.platform === 'darwin'
  return (
    <Collapisible.Content className="bg-gray-950 flex-shrink-0 border-r border-slate-600 h-screen relative group overflow-hidden data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut">
      <Collapisible.Trigger
        className={clsx(
          'absolute h-7 w-7 right-4 z-[99] text-white hover:scale-90 inline-flex items-center justify-center',
          {
            'top-[1.125rem]': isMacOs,
            'top-6': !isMacOs
          }
        )}
      >
        <ArrowBendDoubleUpLeft className="h-7 w-7" />
      </Collapisible.Trigger>
      <div
        className={clsx('region-drag h-14 z-0 mt-10', {
          block: isMacOs,
          hidden: !isMacOs
        })}
      ></div>

      <div
        className={clsx(
          'flex-1 flex flex-col h-full gap-8 w-[220px] transition-opacity group-data-[state=open]:opacity-100 group-data-[state=closed]:opacity-0 duration-200',
          {
            'pt-6': !isMacOs
          }
        )}
      >
        <nav className="flex mx-2 flex-col gap-8 text-slate-100">
          <div className="flex flex-col gap-2">
            <div className="text-white font-semibold uppercase mb-2 ml-2">MENU</div>
          </div>
          <section className="flex flex-col gap-px">
            <LinkContent to={'/'}>Home</LinkContent>
            <LinkContent to={'/create'}>Cadastrar cliente</LinkContent>
            <LinkContent to={'/about'}>Sobre</LinkContent>
          </section>
        </nav>
      </div>
    </Collapisible.Content>
  )
}