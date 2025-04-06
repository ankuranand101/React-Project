import React from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props) => {

	let course =props.course;
	let likedCourses =props.likedCourses;
	let setLikedCourses = props.setLikedCourses;	

	function likeHandler(){

		// phle se liked pada hai;
		if(likedCourses.includes(course.id)){
			setLikedCourses((prev) => prev.filter((cid) => cid!==course.id));
			toast.warning("Liked removed")
		}
		else{
			// phle se like nhi hai:
			
			// liked length ==0
			if(likedCourses.length===0){
				setLikedCourses([course.id]);
			}
			else{
				setLikedCourses((prev) => [...prev, course.id])
			}
			toast.success("liked Succesfully")
		}
	}

  return (

		<div className='w-[300px] bg-bgDark  rounded-md overflow-hidden'>
			<div className='relative'>
			<div className=' rounded-sm'>
				<img src={course.image.url} alt="" />
			</div>
			<div className=' w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
				<button onClick={likeHandler} className='hover:scale-110'>
					{
						likedCourses.includes(course.id) ?  (<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>) 
					}
				</button>
			</div>
			</div>
			

			<div className='p-4'>
				<p className='text-white font-bold text-lg leading-6'>{course.title}</p>
				<p className='text-white mt-2'>
					{
					course.description.length >100 ?(course.description.substr(0,100) + "..."):(course.description)
					}
					</p>
			</div>
			

		</div>
	
  )
}

export default Card
