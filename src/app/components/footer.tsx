export default function Footer() {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content capitalize flex justify-center">
            {`Copyright ©${new Date().getFullYear()} Bawender Yandra. All rights Reserved.`}
        </footer>
    );
}