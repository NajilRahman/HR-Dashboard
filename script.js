fetch('./data.json')
    .then(res => {
        res.json().then(data => {
            salary = {
                eng: {
                    salary: 0,
                    count: 0
                },
                dev: {
                    salary: 0,
                    count: 0
                },
                dis: {
                    salary: 0,
                    count: 0
                },
                tester: {
                    salary: 0,
                    count: 0
                }
            }

            employeecard = ``;
            tabledata=''
            data.map(obj => {
                //salary per department
                obj.department == 'Engineer' ? (salary.eng.salary += obj.salary, salary.eng.count++) : obj.department == 'Developer' ? (salary.dev.salary += obj.salary, salary.dev.count++) : obj.department == 'Software Tester' ? (salary.tester.salary += obj.salary, salary.tester.count++) : (salary.dis.salary += obj.salary, salary.dis.count++);

                //employee details cards
                employeecard += `<div class="col-xs-12 col-sm-6 col-md-3">
            <div class="image-flip" >
                <div class="mainflip flip-0">
                    <div class="frontside">
                        <div class="card">
                            <div class="card-body text-center">
                                <p><img class=" img-fluid" src="${obj.imageUrl}" alt="card image"></p>
                                <h4 class="card-title">${obj.firstName+' '+ obj.lastName}</h4>
                                <p class="card-text">${obj.jobTitle}</p>
                                <a href="https://www.fiverr.com/share/qb8D02" class="btn ${obj.employmentStatus=='Active'?'btn-primary':'btn-danger'} btn-sm">${obj.employmentStatus}</a>
                            </div>
                        </div>
                    </div>
                    <div class="backside">
                        <div class="card">
                            <div class="card-body text-center mt-4 px-5" style="min-width:270px">
                                <h4 class="card-title">Sunlimetech</h4>
                                <p class="card-text">Name :${obj.firstName+' '+ obj.lastName}</p>
                                <p class="card-text">Depatment:${obj.department}</p>
                                <p class="card-text">Age:${obj.age}</p>
                                <p class="card-text">DOB :${obj.dob}</p>
                                <p class="card-text">Joined Date:${obj.dateOfJoining}</p>
                                <p class="card-text">Contract Type${obj.contractType}</p>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`





        //employee detailes Table View

        tabledata+=`  <tr>
                    <td>
                        <div class="d-flex align-items-center">
                            <img src="${obj.imageUrl}" alt=""
                                style="width: 45px; height: 45px" class="rounded-circle" />
                            <div class="ms-3">
                                <p class="fw-bold mb-1">${obj.firstName+' '+ obj.lastName}</p>
                                <p class="text-muted mb-0">${obj.email}</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p class="fw-normal mb-1">${obj.jobTitle}</p>
                        <p class="text-muted mb-0">${obj.department}</p>
                    </td>
                    <td>
                     <a href="https://www.fiverr.com/share/qb8D02" class="btn ${obj.employmentStatus=='Active'?'btn-primary':'btn-danger'} btn-sm">${obj.employmentStatus}</a>
                    </td>
                    <td><i class="fa-solid fa-dollar-sign" style="color: #FFD43B;"></i> ${obj.salary}k</td>
                    <td> ${obj.contractType}</td>
                    <td> ${obj.dateOfJoining}</td>
                    <td> ${obj.contactNumber}k</td>
                    <td> ${obj.manager}k</td>
                    <td>${obj.workLocation}</td>
                    <td>${obj.performanceRating} <i class="fa-regular fa-star" style="color: #FFD43B;"></i></td>
                    <td>
                        <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm">Edit</a>

                    </td>
                </tr>`

            })
            //average salary
            engsal.innerHTML = `$ ${salary.eng.salary} k`
            devsal.innerHTML = `$ ${salary.dev.salary} k`
            dissal.innerHTML = `$ ${salary.dis.salary} k`
            testsal.innerHTML = `$ ${salary.tester.salary} k`
            totalsal.innerHTML = `$ ${salary.tester.salary+salary.eng.salary+salary.dev.salary+salary.dis.salary} k`
            //average salary and count
            testavg.innerHTML = ` Avg : $${Math.round(salary.tester.salary/salary.tester.count)}k<br>  Count : ${salary.tester.count}`
            engavg.innerHTML = ` Avg : $${Math.round(salary.eng.salary/salary.eng.count)}k<br>  Count : ${salary.eng.count}`
            devavg.innerHTML = ` Avg : $${Math.round(salary.dev.salary/salary.dev.count)}k<br>  Count : ${salary.dev.count}`
            disavg.innerHTML = ` Avg : $${Math.round(salary.dis.salary/salary.dis.count)}k<br>  Count : ${salary.dis.count}`
            totalavgsal.innerHTML = ` Avg : $${Math.round((salary.dis.salary+salary.dev.salary+salary.eng.salary+salary.tester.salary)/(salary.dis.count+salary.dev.count+salary.eng.count+salary.tester.count))}k<br>  Count : ${salary.dis.count+salary.dev.count+salary.eng.count+salary.tester.count}`

            //progress bar seting
            engpro.style = `width:${salary.eng.salary/(salary.tester.salary+salary.dev.salary+salary.dis.salary)*100}%`
            testpro.style = `width:${salary.tester.salary/(salary.eng.salary+salary.dev.salary+salary.dis.salary)*100}%`
            devpro.style = `width:${salary.dev.salary/(salary.tester.salary+salary.eng.salary+salary.dis.salary)*100}%`
            dispro.style = `width:${salary.dis.salary/(salary.tester.salary+salary.dev.salary+salary.eng.salary)*100}%`

            //asigning employee card details to div using innerHtml
            employeedetails.innerHTML = employeecard;


            //assigning Table values 
            tabledatas.innerHTML=tabledata



        })
    })

pageview = (event) => {
    const id = event.target.getAttribute('id');
    console.log(id)
    id == 'dash' ? (document.getElementById(id).setAttribute('class', `${document.getElementById(id).getAttribute('class')} active`), employee.setAttribute('class', 'list-group-item list-group-item-action py-3 ripple'), tableview.setAttribute('class', 'list-group-item list-group-item-action py-3 ripple'), notes.setAttribute('class', 'list-group-item list-group-item-action py-3 ripple')) :
        id == 'employee' ? (document.getElementById(id).setAttribute('class', `${document.getElementById(id).getAttribute('class')} active`), dash.setAttribute('class', 'list-group-item list-group-item-action py-3 ripple'), tableview.setAttribute('class', 'list-group-item list-group-item-action py-3 ripple'), notes.setAttribute('class', 'list-group-item list-group-item-action py-3 ripple')) :
        id == 'tableview' ? (document.getElementById(id).setAttribute('class', `${document.getElementById(id).getAttribute('class')} active`), dash.setAttribute('class', 'list-group-item list-group-item-action py-3 ripple'), employee.setAttribute('class', 'list-group-item list-group-item-action py-3 ripple'), notes.setAttribute('class', 'list-group-item list-group-item-action py-3 ripple')) :
        (document.getElementById(id).setAttribute('class', `${document.getElementById(id).getAttribute('class')} active`), dash.setAttribute('class', 'list-group-item list-group-item-action py-3 ripple'), employee.setAttribute('class', 'list-group-item list-group-item-action py-3 ripple'), tableview.setAttribute('class', 'list-group-item list-group-item-action py-3 ripple'))
    console.log(document.getElementById(id))
}