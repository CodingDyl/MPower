import { Text, Group, rem } from '@mantine/core';
import { IconX, IconUpload, IconPhoto} from '@tabler/icons-react';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';

const DropzoneButton = () => {

    return (
        <>
        <Dropzone
                    onDrop={(files) => console.log('accepted files', files)}
                    onReject={(files) => console.log('rejected files', files)}
                    maxSize={10 * 1024 ** 2}
                    accept={[MIME_TYPES.xls]}
                    radius="md"
        >
            <Group position="center" spacing="xl" style={{ minHeight: rem(220), pointerEvents: 'none' }}>
                <Dropzone.Accept>
                    <IconUpload
                        size="2.2rem"
                        stroke={1.5}
                        color="green"
                    />
                </Dropzone.Accept>
                <Dropzone.Reject>
                    <IconX
                        size="2.2rem"
                        stroke={1.5}
                        color="red"
                    />
                </Dropzone.Reject>
                <Dropzone.Idle>
                    <IconPhoto size="3.2rem" stroke={1.5} />
                </Dropzone.Idle>

                <div>
                    <Text size="lg" className="text-center p-2" inline>
                        Click on me or Drag and Upload the completed Company Information Form
                    </Text>
                </div>
            </Group>
        </Dropzone>
        </>
    );
}

export default DropzoneButton;