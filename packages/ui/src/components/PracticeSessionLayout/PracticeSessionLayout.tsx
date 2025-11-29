/* GENERATED_BY: Antigravity FrontendLayoutAgent */
import React from 'react';

interface PracticeSessionLayoutProps {
    children: React.ReactNode;
    sidebar: React.ReactNode;
    controls: React.ReactNode;
}

export const PracticeSessionLayout: React.FC<PracticeSessionLayoutProps> = ({ children, sidebar, controls }) => {
    return (
        <div className="flex h-screen bg-background text-white overflow-hidden">
            <aside className="w-64 bg-surface p-4 hidden md:block">
                {sidebar}
            </aside>
            <main className="flex-1 flex flex-col relative">
                <div className="flex-1 p-4 flex items-center justify-center">
                    {children}
                </div>
                <div className="p-4 absolute bottom-0 left-0 right-0 flex justify-center">
                    {controls}
                </div>
            </main>
        </div>
    );
};
