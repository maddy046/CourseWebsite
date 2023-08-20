import React, {useEffect} from "react";

const About=()=>{

    useEffect(()=>{
        document.title="about";
      }, []);

    return(
        <>
            <p className="text-center">This is the about page</p>
        </>
    );
}

export default About;