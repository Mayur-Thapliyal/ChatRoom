import './home_screen.css'
// import {useState} from "react";
// import {useEffect} from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";


// export default function HomeScreen(props){
//     const exampleVariant = {
//         visible: { opacity: 1, scale: 2 ,x:200,transition:{duration:0.05}},
//         hidden: { opacity: 0, scale: 0,x:200 },
//         };
//     const control = useAnimation()
//     const [ref, inView] = useInView()
//     useEffect(() => {
//         if (inView) {
//             control.start("visible");
//         } 
//         }, [control, inView]);
//     return(
//         <div className="home_screen_wrap">
//             <motion.div className='wrap_div_1 wrap_div' 
//                         ref={ref}
//                         variants={exampleVariant}
//                         initial="hidden"
//                         animate={control}
//             >

//             </motion.div>
//             <motion.div className='wrap_div_2 wrap_div' 
//                         ref={ref}
//                         variants={exampleVariant}
//                         initial="hidden"
//                         animate={control}
//             >

//             </motion.div>
//             <motion.div className='wrap_div_3 wrap_div' 
//                         ref={ref}
//                         variants={exampleVariant}
//                         initial="hidden"
//                         animate={control}
//             >

//             </motion.div>
//             <motion.div className='wrap_div_4 wrap_div' 
//                         ref={ref}
//                         variants={exampleVariant}
//                         initial="hidden"
//                         animate={control}
//             >

//             </motion.div>
//             <motion.div className='wrap_div_5 wrap_div' 
//                         ref={ref}
//                         variants={exampleVariant}
//                         initial="hidden"
//                         animate={control}
//             >

//             </motion.div>
//         </div>
//     )
// }
export default function HomeScreen(props){
    return(
        <div className="home_screen_wrap">
            <div className='wrap_div_1 wrap_div' ></div>
            <div className='wrap_div_2 wrap_div' ></div>
            <div className='wrap_div_3 wrap_div' ></div>
            <div className='wrap_div_4 wrap_div' ></div>
            <div className='wrap_div_5 wrap_div' ></div>
        </div>
    )
}

