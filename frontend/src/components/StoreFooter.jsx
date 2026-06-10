const StoreFooter = () => (
    <footer className="bg-surface-container-low border-t border-outline-variant w-full mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-lg py-xl gap-md w-full max-w-container-max mx-auto">
            <div className="font-title-sm text-title-sm text-on-surface">Efficient Flow</div>
            <div className="flex gap-md font-body-sm text-body-sm">
                <a className="text-on-secondary-container hover:text-primary-container transition-all" href="#">Privacy Policy</a>
                <a className="text-on-secondary-container hover:text-primary-container transition-all" href="#">Terms of Service</a>
                <a className="text-on-secondary-container hover:text-primary-container transition-all" href="#">Help Center</a>
                <a className="text-on-secondary-container hover:text-primary-container transition-all" href="#">Contact Us</a>
            </div>
            <div className="font-body-sm text-body-sm text-secondary">
                © 2024 Efficient Flow E-commerce. All rights reserved.
            </div>
        </div>
    </footer>
)

export default StoreFooter;