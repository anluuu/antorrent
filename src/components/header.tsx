import { GalleryVerticalEnd } from "lucide-react"
import {
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function Header() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex gap-4 items-center">
        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
          <GalleryVerticalEnd className="size-4" />
        </div>
        <span className="font-semibold">Antorrent</span>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
