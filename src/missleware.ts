import {withAuth} from '@kinde-oss/kinde-auth-nextjs/middleware';
import { NextRequest } from '../node_modules/next/server';

export default function middleware(req: NextRequest){
    withAuth(req);
}

export const config = {
    matcher: ["/create-post",]
}