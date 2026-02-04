import { useEffect, useState } from "react";

export default function Footer() {
    const [currentDate, setCurrentDate] = useState(new Date());
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000 * 60 * 60);
        return () => clearInterval(timer);
    }, []);

    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const month = monthNames[currentDate.getMonth()];
    const date = currentDate.getDate();
    
    return (
        <footer>
            <div className="grid grid-cols-2 border-t border-gray-300">
                <p className="text-center">{month} {date}</p>
                <p className="text-center">© 2026 Just 4</p>
            </div>

        </footer>
    );

}