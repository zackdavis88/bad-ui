### Data

This is the root folder that contains all things data related in the application:

1. `auth` - configuration for NextAuth which manages user login/logout.
2. `actions` - API calls that are mutations such as create / update / delete methods.
3. `fetchers` - API calls that retrieve data.
4. `utils` - is a place for reusable methods related to data actions / fetchers.
5. `apiTypings.ts` - is where we will store the typings for API responses.

### API Requests

There is a util method that can be used for all API calls named `apiRequest` located in `data/utils/request.ts`.
This method calls the API and automatically appends some headers that are expected, it also returns a typed response
so that UI components know exactly what data they have.

#### Example data fetcher using apiRequest

```typescript
'use server';
import apiRequest, { ApiError } from '@/app/data/utils/request';
import { GetExampleDataResponse } from '@/app/data/apiTypes';

export async function fetchExampleData() {
  try {
    const { body } = await apiRequest<GetExampleDataResponse>('/example');

    // body is typed based on the typing that was passed to apiRequest.
    return body;
  } catch (error) {
    if (error instanceof ApiError) {
      // If we hit this block, the API responsed with a non-200 and we can handle the response data.
    }

    // If we hit this block, some unknown error happened and we can handle things accordingly or simply
    // throw the error.
    throw error;
  }
}
```
