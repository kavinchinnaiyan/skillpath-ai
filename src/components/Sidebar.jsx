
import {
    LayoutDashboard,
    UserRound,
    Brain,
    BriefcaseBusiness,
    BookOpen,
    ChartNoAxesCombined,
    Bot,
    Settings,
    LogOut
} from 'lucide-react';

function Sidebar({ activePage, setActivePage }) {

    const menu = [
        { name: 'Dashboard', icon: LayoutDashboard },
        { name: 'My Profile', icon: UserRound },
        { name: 'My Skills', icon: Brain },
        { name: 'Career Match', icon: BriefcaseBusiness },
        { name: 'Learning Path', icon: BookOpen },
        { name: 'My Progress', icon: ChartNoAxesCombined },
        { name: 'AI Mentor', icon: Bot }
    ];

    return (
        <aside className="sidebar">

            <h2 className="brand">
                SkillPath <span>AI</span>
            </h2>

            <p className="menu-label">MENU</p>

            <nav>
                {menu.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.name}
                            className={`menu-item ${activePage === item.name ? 'active' : ''
                                }`}
                            onClick={() => setActivePage(item.name)}
                            style={{ cursor: 'pointer' }}
                        >
                            <Icon size={19} />
                            <span>{item.name}</span>
                        </div>
                    );
                })}
            </nav>

            <div className="sidebar-bottom">

                <div
                    className={`menu-item ${activePage === 'Settings' ? 'active' : ''
                        }`}
                    onClick={() => setActivePage('Settings')}
                    style={{ cursor: 'pointer' }}
                >
                    <Settings size={19} />
                    <span>Settings</span>
                </div>

                <div className="menu-item">
                    <LogOut size={19} />
                    <span>Logout</span>
                </div>

            </div>

        </aside>
    );
}

export default Sidebar;
