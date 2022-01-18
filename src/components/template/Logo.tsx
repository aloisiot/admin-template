export default function Logo(){
    return (
        <div className={`
            flex flex-col items-center justify-center
            bg-gradient-to-b from-red-600 to-blue-600
            rounded-full
            h-12 w-12
            bg-white
        `}>
            <div className="
                h-6 w-6 
                bg-white
                rotate-45
            ">
                <div className="
                    h-6 w-6
                    bg-white
                    rotate-45
                "></div>
            </div>
        </div>
    )
}