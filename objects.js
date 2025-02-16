const exampleObj = {
    name: 'Vasya',
    friends: 5,
    likes: 19,
    projects: 7
};

const admin = {
    username: 'admin',
    age: 30,
    role: 'administrator',
    permissions: {
      edit: true,
      write: true,
      delete: true,
      totalPermissions: 3
    },
    contacts: {
        email: 'admin@gmail.com',
        phone: '777-777-7777',
        totalContacts : 2
    },
    isActive: true,
    totalProjects: 10,
    completedTasks: 35
};


function countAllNumbers(obj) {
    let sum = 0;

    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            sum += obj[key];
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            for (let nestedKey in obj[key]) {
                if (typeof obj[key][nestedKey] === 'number') {
                    sum += obj[key][nestedKey];
                }
            }
        }
    }

    return sum;
}


function sortKeysByValues(obj, keyValueMap = {}) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            keyValueMap[key] = obj[key];
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            sortKeysByValues(obj[key], keyValueMap);
        }
    }

        return Object.entries(keyValueMap)
            .sort((a, b) => b[1] - a[1])
            .map(([key]) => key);
}



console.log(countAllNumbers(exampleObj));
console.log(sortKeysByValues(exampleObj));

console.log(countAllNumbers(admin));
console.log(sortKeysByValues(admin));