import Image from "next/image";

export default function Footer(){
    return(
        <footer>
            <div>
                <Image src="/Images/Group 238.svg" alt="Footer Image" width={100} height={100} />
            </div>
            <p>Footer content goes here</p>
        </footer>
    )
}