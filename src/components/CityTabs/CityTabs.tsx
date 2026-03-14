import { Tabs } from "@mantine/core"
import { useNavigate, useLocation } from 'react-router-dom';


export const CityTabs = () => {
const navigate = useNavigate();
const location = useLocation();
const activeTab = location.pathname.includes('petersburg') ? 'petersburg' : 'moscow';

return (
<Tabs value={activeTab} onChange={(value) => navigate(`/vacancies/${value}`)}>

<Tabs.List style={{ '--tab-border-color': 'transparent' }}>

        <Tabs.Tab value="moscow">Москва</Tabs.Tab>
        <Tabs.Tab value="petersburg">Санкт-Петербург</Tabs.Tab>
    </Tabs.List>
</Tabs>
)
}