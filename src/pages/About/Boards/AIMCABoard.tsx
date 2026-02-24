const BoardTemplate = ({ title }: { title: string }) => (
    <div className='pt-24 pb-16 min-h-screen bg-gray-50 flex items-center justify-center'>
        <div className='text-center'>
            <h1 className='text-4xl font-bold text-blue-900 mb-4'>{title}</h1>
            <div className='h-1 w-24 bg-yellow-500 rounded-full mx-auto mb-6'></div>
            <p className='text-xl text-gray-600 italic'>Information will be updated shortly.</p>
        </div>
    </div>
);
export default () => <BoardTemplate title='AIMCA Board (BBA & BCA)' />;
