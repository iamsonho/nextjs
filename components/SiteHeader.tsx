'use client'
import {
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Badge,
  Image,
} from "@nextui-org/react";

import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/solid";
import Link from 'next/link';
import { useCart } from "@/contexts/CartContext";


export const SiteHeader = () => {
	const { cart } = useCart();
	console.log(111, cart);
  return (
	<Navbar className="h-[100px] bg-gradient-to-r from-yellow-100 via-amber-200 to-lime-300">
		<NavbarBrand>
			<Link href='/'>
				<Image
					src="next.svg"
					width={100}
					height={100}
				/>
			</Link>
		</NavbarBrand>
		<NavbarContent justify="end">
			<Link href="/cart">
				<Badge color="danger" content={cart.items.length} showOutline={false}>
					<ShoppingCartIcon className="text-amber-300 font-bold" width={24}/>
				</Badge>
			</Link>
			<NavbarItem>
				<Dropdown>
					<DropdownTrigger>
						<Avatar
							icon={<UserIcon width={24}/>}
						/>
					</DropdownTrigger>
					<DropdownMenu>
						<DropdownItem key="profile">Profile</DropdownItem>
						<DropdownItem key="orders">Orders</DropdownItem>
						<DropdownSection>
							<DropdownItem key="settings">Settings</DropdownItem>
							<DropdownItem key="logout" color="danger">Logout</DropdownItem>
						</DropdownSection>
					</DropdownMenu>
				</Dropdown>
			</NavbarItem>
		</NavbarContent>
	</Navbar>
  );
};
