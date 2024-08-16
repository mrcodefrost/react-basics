import { useEffect, useState } from "react"

const CustomHook = (url) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((r) => r.json())
            .then((d) => setData(d));
    }, [url]);

    return [data];
};
export default CustomHook