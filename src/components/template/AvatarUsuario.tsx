import Image from "next/image";
import Link from "next/link";
import useAuth from "../../data/hook/useAuth";
import iconeAvatarUser from "../icons/avatar.svg";

export default function AvatarUsuario(){
    const { usuario } = useAuth()
    
    return (
        <Link href="/perfil" passHref>
            <div className="h-10 w-10">
                <Image
                    className="rounded-full"
                    height={40}
                    width={40}
                    src={usuario?.imagemUrl ?? iconeAvatarUser}
                    alt="Avatar do usuário"
                />
            </div>
        </Link>
    )
}