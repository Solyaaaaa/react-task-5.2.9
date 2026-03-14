import { AppShell, Button, Container, Group, Image, Paper, Stack, Text, Title } from "@mantine/core"
import { HeaderVacancy } from "../../components/HeaderVacancy/HeaderVacancy"
import cat from '../../assets/sad-cat.gif';
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        
         <AppShell header={{ height: 60 }}>
           <HeaderVacancy />
           <AppShell.Main bg={'#f6f6f7'} pt={60}>

             <Container maw={700} p={0}>
                <Paper mt={72} p={32} w={'100%'} radius="md">
                    <Group justify="space-between" wrap="nowrap">
                    <Stack mb={32} maw={500}>
                    <Title>Упс! Такой страницы не существует</Title>
                    <Text>Давайте перейдём к началу.</Text>
                    </Stack>
                    <Button color="rgba(66, 99, 235, 1)" onClick={() => navigate('/vacancies')} w={135} px={10}>На главную</Button>
                    </Group>
                <Image  radius="md" maw={640} src={cat} alt="Грустный кот"/>
                </Paper>
             </Container>
             </AppShell.Main>
             </AppShell>

    )
}
export default NotFoundPage