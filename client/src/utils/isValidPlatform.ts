import { Platforms } from '../const/platforms';

export function isValidPlatform(str: string): str is Platforms {
    return Object.keys(Platforms).some((platform) => {
        return Platforms[platform as keyof typeof Platforms] === str;
    });
}
