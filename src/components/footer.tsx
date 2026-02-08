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
            <div className="grid grid-cols-3 border-t border-gray-300 pt-2">
                <p className="grid">{month} {date}</p>
                <p className="text-center center">© 2026 Just 4. <br /> All Rights Reserved.</p>
            </div>

        </footer>
    );

}