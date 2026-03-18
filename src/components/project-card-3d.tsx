import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import { AspectRatio } from './ui/aspect-ratio';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface ProjectCardProps {
    title: string;
    type: string;
    description: string;
    imageUrl: string;
    githubUrl?: string;
    demoUrl?: string;
    skills?: string[];
}

export function ProjectCard3d({
    title,
    type,
    description,
    imageUrl,
    githubUrl,
    demoUrl,
    skills,
}: ProjectCardProps) {
    return (
        <CardContainer className="inter-var" containerClassName="py-8">
            <CardBody className="group/card relative h-auto w-auto rounded-[1.75rem] border border-border/70 bg-card/85 p-6 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.55)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_80px_-34px_rgba(16,185,129,0.35)] sm:w-[30rem]">
                <CardItem translateZ="50" className="w-full mt-4">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                        <Image
                            src={imageUrl}
                            alt="Project Image"
                            fill
                            className="rounded-md object-cover"
                        />
                    </AspectRatio>
                </CardItem>
                <CardItem
                    as="h3"
                    translateZ="60"
                    className="scroll-m-20 text-2xl font-semibold tracking-tight mt-4"
                >
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-sm text-muted-foreground"
                >
                    {type}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="50"
                    className="leading-7 [&:not(:first-child)]:mt-6"
                >
                    {description}
                </CardItem>
                {skills && (
                    <CardItem
                        translateZ="40"
                        className="flex gap-2 flex-wrap mt-6"
                    >
                        {skills.map((skill) => (
                            <Badge key={skill} variant="default">
                                {skill}
                            </Badge>
                        ))}
                    </CardItem>
                )}
                <div className="mt-10 flex items-center justify-between gap-4">
                    {githubUrl && (
                        <CardItem translateZ={30}>
                            <Link href={githubUrl} target="_blank" passHref>
                                <Button
                                    variant="link"
                                    className="px-0 text-foreground/80 hover:text-primary"
                                >
                                    Link To Github
                                    <ExternalLink className="ml-2" />
                                </Button>
                            </Link>
                        </CardItem>
                    )}
                    {demoUrl && (
                        <CardItem translateZ={30}>
                            <Link href={demoUrl} target="_blank" passHref>
                                <Button className="rounded-full px-5 shadow-sm">
                                    Live URL
                                    <ExternalLink className="ml-2" />
                                </Button>
                            </Link>
                        </CardItem>
                    )}
                </div>
            </CardBody>
        </CardContainer>
    );
}
