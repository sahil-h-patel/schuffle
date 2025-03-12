import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import TaskList from '@components/TaskList';
import { Outlet } from 'react-router';

function MainLayout() {
    return (

// <div className="grid grid-rows-[auto] h-screen">
//     <Navbar />
//     <main className="grid grid-cols-[250px_1fr] overflow-hidden">
//         <TaskList />
//         <div className="overflow-y-auto">
//             <Outlet />
//         </div>
//     </main>
//     <Footer />
// </div>

        <div className="grid grid-rows-[auto,1fr,auto] grid-cols-[300px,1fr] h-screen w-full">
            {/* Navbar */}
            <div className="row-start-1 row-end-2 col-span-2">
                <Navbar />
            </div>

            {/* TaskList */}
            <aside className="row-start-2 row-end-3 col-start-1 col-end-2 overflow-y-auto p-2">
                <TaskList />
            </aside>

            {/* Main Content */}
            <main className="row-start-2 row-end-3 col-start-2 col-end-3 p-2 overflow-y-auto">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="row-start-3 row-end-4 col-span-2 text-center shadow-inner">
                <Footer />
            </footer>
        </div>
    );
}



export default MainLayout;
