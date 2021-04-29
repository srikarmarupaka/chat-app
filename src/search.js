import React, {useState, useEffect} from 'react';

export default function Search({list}) {
    const [contacts, setContacts] = useState(list)
    const [search, setSearch] = useState('')
  
    const filtered = search.length === 0 ? list : list.filter(l => l.name.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        setContacts(filtered)
        console.log(filtered)
    }, [filtered])
    

    function List() {
        return (
            <div>  
                <ul>
                {contacts.map(s => (
                    <li key={s}>
                       <span>{s}</span>
                    </li>   
                ))}
                </ul>
            </div>
        )
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
        />
        <div style={{"backgroundColor":"green"}}>
            {List}
        </div>
        </div>
    )
}
