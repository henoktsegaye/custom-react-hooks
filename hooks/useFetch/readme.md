# useFetch
This hook is a wrapper around the fetch function it enables you to fetch on demand using a `fetch` function returned from the hook. The hook could cache results with the given `cacheDuration` param.

# Arguments
- url: string
- options: same as [options property for fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch#parameters)
- cacheDuration: number

# dependencies

- fetch ( which is supported in all modern browsers so you shouldn't worry)

# How to use

```
import { useEffect } from 'react'
import {useFetch} from 'hooks/useFetch'

const example = () => {
    const { fetch , loading , data , error} = useFetch('https://example.com/api/getlits') 

    useEffect(() => {
        fetch()
    }, [])
    
    if(fetching) {
        return 'loading...'
    }

    if(error) {
        return 'ops, we got error '+error.message()
    }
    return (<div>
        {data?.map(el => <h1> {el.title}</h1>)}
    </div>)
}