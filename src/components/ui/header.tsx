import { ArrowBigDown, ChevronDown, MenuIcon } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./sheet"
import Image from "next/image"
import { Avatar, AvatarImage } from "./avatar"
import { Menubar, MenubarContent, MenubarMenu, MenubarTrigger } from "./menubar"

const Header = () => {
  return (
    <header className="bg-blue-dark p-8 flex justify-between items-center max-[440px]:flex-col gap-6 max-[440px]:p-3">
      <div className="flex gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <MenuIcon className="text-white cursor-pointer hover:text-white/70"/>
          </SheetTrigger>
          <SheetContent side={'left'} className="bg-blue-dark" ></SheetContent>
        </Sheet>
        <Image src={'/logo.svg'} width={126} height={20} alt="Logo"/>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Avatar>
          <AvatarImage src={'/user.jpg'} alt="user"/>
        </Avatar>
        <p className="text-white text-xs">Nome do usuário</p>
        <Menubar className="border-none bg-transparent">
          <MenubarMenu>
            <MenubarTrigger className="border-none bg-transparent p-0 cursor-pointer"><ChevronDown className="text-white"/></MenubarTrigger>
            <MenubarContent className="w-[100px] h-[100px] bg-blue-dark border-white">

            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </header>
  )
}

export default Header