import React from 'react';
import { Card, Image, Text, Badge, Button, Group, Title } from '@mantine/core';


const Cards = ({ item }) => {
    console.log(item)
    return (
        <div>

            <Card shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section>
                    <Image
                        src={item.volumeInfo.imageLinks.thumbnail}
                        height={160}
                        alt="Norway"
                    />
                </Card.Section>
                <br/>
                <Title order={4}>
                    {item.volumeInfo.title}
                    </Title>

                <Text size="md" color="dimmed">
                    {item.volumeInfo.authors}
                </Text>

                <Text>
                    [{item.volumeInfo.categories}]
                </Text>

                

                <Button variant="light" color="blue"  mt="md" radius="md">
                    See it
                </Button>
            </Card>

        </div>
    );
};

export default Cards;