import { useEffect } from "react";
import { useState } from "react";


const KhaledBlogs = () => {
    const [khaledBlogs, setKhaledBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setKhaledBlogs(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default KhaledBlogs;