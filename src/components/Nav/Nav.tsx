import {
  FaInfoCircle,
  FaDashcube,
  FaInfinity,
  FaShareAlt,
  FaLeaf,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useTraceabilityStore } from '../../store/useTraceabilityStore';
import { Tab } from '../../utils/constants';

interface NavItem {
  tab: Tab;
  label: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { tab: 'product', label: 'navigation.product', Icon: FaInfoCircle },
  { tab: 'traceability', label: 'navigation.Traceability', Icon: FaDashcube },
  { tab: 'sustainability', label: 'navigation.Sustainability', Icon: FaLeaf },
  { tab: 'blockchain', label: 'navigation.Blockchain', Icon: FaInfinity },
  { tab: 'share', label: 'navigation.Share', Icon: FaShareAlt },
];

const Nav = () => {
  const { t } = useTranslation();
  const activeTab = useTraceabilityStore((s) => s.activeTab);
  const setActiveTab = useTraceabilityStore((s) => s.setActiveTab);

  return (
    <nav className="fixed w-full bottom-0 left-0 right-0 bg-[#f5f5f4] shadow-lg z-10">
      <ul className="flex w-full">
        {NAV_ITEMS.map(({ tab, label, Icon }) => {
          const isActive = activeTab === tab;
          return (
            <li
              key={tab}
              className={`flex-1 dark:text-white ${
                isActive
                  ? 'bg-[#797f75] dark:bg-5f6259 text-white'
                  : 'text-[#5f6259] dark:bg-black'
              }`}
            >
              <button
                type="button"
                onClick={() => setActiveTab(tab)}
                className="py-3 block text-center w-full"
              >
                <Icon className="mx-auto dark:text-white" size={24} />
                <span className="text-[10px]">{t(label)}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
