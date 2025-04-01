export default function Footer() {

    const footerNavs = [
        {
            href: 'javascript:void()',
            name: 'Terms'
        },
        {
            href: 'javascript:void()',
            name: 'License'
        },
        {
            href: 'javascript:void()',
            name: 'Privacy'
        },
        {
            href: 'javascript:void()',
            name: 'About us'
        }
    ]
    return (
        <footer className="pt-10">
            <div className="max-w-screen-xl mx-auto px-4 text-white md:px-8">
                <div className="justify-between sm:flex">
                    <div className="space-y-6">
                        {/* <img src="https://cdn.pixabay.com/photo/2022/09/18/07/41/logo-7462411_1280.png" width={100} height={50} className="w-32" /> */}

                        <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
                            {
                                footerNavs.map((item, idx) => (
                                    <li className="text-white duration-150">
                                        <a key={idx} href={item.href}>
                                            {item.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    
                </div>
                <div className="mt-10 py-10 border-t md:text-center">
                    <p>Contact us via email : hornbunlong0@gmail.com</p>
                </div>
            </div>
        </footer>
    )
}