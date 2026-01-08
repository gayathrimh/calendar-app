import {useState} from 'react';
import '../App.css';

export default function Page1(){

    const daysOfWeek=['Sun','Mon','tue','Wed','Thu','Fri','Sat'];

    const months=['January','February','March','April','May','June','July','August','September','October','November','December'];

   const currentDate=new Date();
   const [currentMonth,setCurrentMonth]=useState(currentDate.getMonth());
   const [currentYear,setCurrentYear]=useState(currentDate.getFullYear());
   const datesOfMonth=new Date(currentYear,currentMonth,0).getDate();
   const firstDayInMonth=new Date(currentYear,currentMonth,1).getDay();

   function displayDaysOfWeek(){
    let weekdays=[];
    for(let i=0;i<daysOfWeek.length;i++){
        weekdays.push(<span key={"Days"+i}>{daysOfWeek[i]}</span>)
    }
    return weekdays;
   }

   function emptySpace(){
    let emptySpaces=[];
    for(let i=0;i<firstDayInMonth;i++){
        emptySpaces.push(<span key={"empty"+i}></span>)
    }
    return emptySpaces;
   }
   function DisplaydatesInMonth(){
    let Dates=[];
    for(let i=1;i<datesOfMonth;i++){
        Dates.push(<span key={"Dates"+i}>{i}</span>)
    }
    return Dates;
   }
   function previous(){
    if (currentMonth===0){
        setCurrentMonth(11);
        setCurrentYear(currentYear-1);
    }else{
        setCurrentMonth(currentMonth-1);
    }
   }
   function next(){
    if (currentMonth===11){
        setCurrentMonth(0);
        setCurrentYear(currentYear+1);
    }else{
        setCurrentMonth(currentMonth+1);
    }
   }

    return(
        <div>
            <h2>Calendar {currentYear}</h2>

            <h3>{months[currentMonth]}, {currentYear}</h3>

        <div>
            <i onClick={previous}>&lt;</i>
            <i onClick={next}>&gt;</i>
        </div>
            <table>
                <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>19</td>
                    <td>20</td>
                    <td>21</td>
                    <td>22</td>
                    <td>23</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>25</td>
                    <td>26</td>
                    <td>27</td>
                    <td>28</td>
                    <td>29</td>
                    <td>30</td>
                    <td>31</td>
                </tr>
            </table>
            <div className='days-container'>
            {displayDaysOfWeek()}
            </div>

        <div className='dates-container'>
        {emptySpace()}
        {DisplaydatesInMonth()}
            </div>
        </div>
    );
}