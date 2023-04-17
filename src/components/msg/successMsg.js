import React from "react";
import {ImSpinner9} from "react-icons/im";
import { motion } from "framer-motion"


const SuccessMsg = ({successMsg}) => {
    return(
        <motion.div initial={{ y:20, opacity: 0}}
                    animate={{y:0,opacity:1}}
                    transistion={{
                        y:{ type: "spring", stiffness:120},
                    }}
                    className="absolute shadow-2xl font-thin tracking-wide font-medium
    text-lg top-2 left-[40%] bg-green-200 px-10 py-4 rounded border-b-[6px]
    border-b-green-500 text-green-500">
            <p className="flex items-center gap-4"><span className="animate-spin"><ImSpinner9 /> </span> {successMsg}</p>
        </motion.div>
    )
}

export default SuccessMsg;
