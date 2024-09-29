import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
            UtopiaEstate
            </h2>
            <p className='text-gray-500 my-2'>
            {/* • Programming Languages: C/C++, Python, JavaScript, SQL
            • Technical tools: HTML, CSS, MongoDB, MySQL, React.Js, Node.Js, Express.Js
            • Operating Systems: Windows, Linux
            • Version Control Systems: Git, GitHub
            • Key courses taken: Data Structures & Algorithm, Python Programming, Probability and Random
                Processes, Multivariable Calculus, Linear Algebra, Complex analysis, Network Synthesis */}
                Utopia Real Estate, developed by Sujal Pachori, uses the MERN stack and Tailwind CSS. The app offers advanced authentication with JWT and Google OAuth, allowing users to add property listings with up to six images. It features a robust search function, and Redux Toolkit ensures smooth data management across components.
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://github.com/SujalPachori/Utopia_Real_Estate" target='_blank' rel='noopener noreferrer'>
                    Github
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://th.bing.com/th/id/R.c855091eaa0d2d5dbbcdb196001c63d4?rik=%2fiI3kxF5YVMUtw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-zxjsKsxjKIk%2fU5vUJPvypfI%2fAAAAAAAAnkA%2fy6Zkwnl6GW8%2fs1600%2fContemporary-Mansions-On-Sunset-Plaza-Drive-LA-passion4luxury-5.jpg&ehk=9PsoEoE4Qy1ZgiP9AMhLvIZ76%2f5MLSf6bZqqVRnEX%2f8%3d&risl=&pid=ImgRaw&r=0" />
        </div>
    </div>
  )
}