const PlayStoreButton = () => {
    return (
        <a
            href="https://play.google.com/store/apps/details?id=com.medicsewa.relive"
            className="flex items-center justify-center gap-3 bg-black text-white rounded-full px-6 py-3 hover:bg-gray-800 transition-colors shadow-md"
        >
            <img src="play.png" alt="" className="w-6 h-6" />
            <div className="text-left">
                <p className="text-xs">Get it on</p>
                <p className="text-sm font-semibold">Google Play</p>
            </div>
        </a>
    )
}
export default PlayStoreButton;