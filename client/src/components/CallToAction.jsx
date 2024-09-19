import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
            Skills/Relevant coursework:
            </h2>
            <p className='text-gray-500 my-2'>
            {/* • Programming Languages: C/C++, Python, JavaScript, SQL
            • Technical tools: HTML, CSS, MongoDB, MySQL, React.Js, Node.Js, Express.Js
            • Operating Systems: Windows, Linux
            • Version Control Systems: Git, GitHub
            • Key courses taken: Data Structures & Algorithm, Python Programming, Probability and Random
                Processes, Multivariable Calculus, Linear Algebra, Complex analysis, Network Synthesis */}
                Sujal Pachori creates informative blogs on various topics, including web development, computer science fundamentals, and data structures and algorithms. His content aims to provide insights and guidance for learners and developers, helping them understand essential concepts and improve their skills in these areas. Through his blogs, he shares practical knowledge and problem-solving techniques, offering valuable resources for those looking to enhance their understanding of these subjects.
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://drive.google.com/file/d/17f4EyBefykXlSXmB_9anbETo_Daj8r-6/view" target='_blank' rel='noopener noreferrer'>
                    Sujal Pachori
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://firebasestorage.googleapis.com/v0/b/zlogs-6b805.appspot.com/o/1726397400232photo%20(1).jpg?alt=media&token=6c7fef84-9c7d-4885-9231-355f76bf282b" />
        </div>
    </div>
  )
}