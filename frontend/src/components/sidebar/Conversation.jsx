import useConversation from "../../zustand/useConversation";

const Conversation = ({conversation,lastIdx,emoji}) => {
	// conversation is userId of the user of which the chat is selected
	const {selectedConversation, setSelectedConversation} = useConversation();
	const isSelected=selectedConversation?._id===conversation?._id;


	return (
		<>
			<div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected && "bg-sky-500"}`} onClick={(e)=>setSelectedConversation(conversation)}>
				<div>
					<div className='w-12 rounded-full'>
						<img
							src={conversation?.profilePic}
							alt='user avatar'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>{conversation.fullName}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div>

			{!lastIdx && <div className='divider my-0 py-0 h-1' />}
		</>
	);
};
export default Conversation;