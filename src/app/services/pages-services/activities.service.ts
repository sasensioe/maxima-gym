import { Injectable } from '@angular/core';

export interface Activity{
  title: string;
  img: string;
  p1: string;
  p2?: string;
  p3?: string;
  p4?: string;
}

export interface Week{
  hour: string,
  mo:string,
  tu:string,
  we:string,
  th:string,
  fr:string,
  sa:string,
  su:string,
}

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  activities: Activity[] = [

    {
      title: 'YOGA',
      img: 'assets/img/pages/activities/yoga.jpg',
      p1: 'Yoga has two main meanings: union and methods to reach this union and it is a discipline and philosophy of life simultaneously that allows the union of our body with our mind to achieve harmony, both physically, mentally and spiritually.',
      p2: 'Yoga is believed to be more than 5,000 years old, according to information in the oldest texts of humanity, the Vedas.',
      p3: 'The practice of Yoga and its culture was passed from teacher to disciple verbally, it was said that it was by word of mouth, later they began to transcribe until today.',
      p4: 'The Yoga practitioner sets his own goals, becoming an experience for himself.'},
    {
      title: 'BODY PUMP',
      img: 'assets/img/pages/activities/body-pump.jpg',
      p1: 'It is the original, the authentic class with bar and discs that strengthens and tones the whole body. In a BODYPUMP session you work the main muscle groups using the best exercises in the fitness room, such as squats, presses, elevations and curls. Ten tracks with great music, great instructors and your choice of weight ... will motivate you to get the results you are looking for, and fast!',
      p2: 'BODYPUMP is available as 55, 45 or 30 minute classes.'},
    {
      title: 'BODY COMBAT',
      img: 'assets/img/pages/activities/body-combat.jpg',
      p1: 'BODY COMBAT is a cardiovascular program inspired by Martial Arts, with movements that come from Karate, Boxing, Tae Kwon Do, Tai Chi and Muay Thai. Choreographed based on good music, with its excellent instructors, the participants perform blows, punches, kicks and katas, burn calories and achieve greater cardiovascular endurance.',
      p2: 'BODY COMBAT is available as 55, 45 or 30 minute classes.'},
    {
      title: 'SPINNING',
      img: 'assets/img/pages/activities/spinning.jpg',
      p1: 'Spinning consists of carrying out exercises on the bicycle, combining them with music and performing choreographies, fundamentally seeking the amusement of the attending public, at the same time that it works globally to tone the trunk and upper extremities together with important cardiovascular work.',
      p2: 'The rhythms are diverse, and can go from very slow, to a maximum speed, where the work intensities are also combined.',
      p3: 'Toning of the arms, abdomen or shoulder girdle is relatively easy to carry out. If we also include material aids such as aerobics weights or tensors, toning can be completed for any muscle group.',
      p4: 'Something that we cannot forget when it comes to spinning and that a good teacher or instructor must always insist on is the postural correction.'},
    {
      title: 'TRX',
      img: 'assets/img/pages/activities/trx.jpg',
      p1: 'The TRX is a suspension training that is developed by means of an adjustable non-elastic harness, attached to a lace point, it can be a wall, door, tree, or any other high, strong and static surface. At the anchorage point two ropes with grips come out, where the individual holds his arms or feet to suspend himself on his own body, and thus perform the movements.',
      p2: 'The TRX is characterized by its functional nature since it allows all parts of the body to be worked on for toning, increasing muscle strength, as well as for improving posture and injury to some part of the body, especially the vertebrae. The most important thing is that it does not require a physical condition from the individual since there are different training programs to suit everyone.'},
    {
      title: 'PILATES',
      img: 'assets/img/pages/activities/pilates.jpg',
      p1:'Pilates is a method of exercise and physical movement designed to stretch, strengthen and balance the body. By systematically practicing specific exercises along with breathing patterns, Pilates has proved invaluable not only for people who want to maintain their physical condition, but also as an important complement to sports and physical rehabilitation of all kinds.',
      p2: 'The Pilates Method is not just exercise. It is a series of controlled movements for the body and mind, carried out on a mat or specially designed devices.'},

  ];
  
  schedule: Week[] = [
    
    {hour: '07:00',mo: 'BODY PUMP', tu: '', we: '', th: 'GAP', fr: 'BODY PUMP', sa: 'GAP', su: 'GAP'},
    {hour: '09:00', mo: 'BODY PUMP', tu: 'SPINNING', we: 'BODY PUMP', th: '', fr: 'BODY PUMP', sa: '', su: ''},
    {hour: '11:00', mo: '', tu: '', we: '', th: 'BODY PUMP', fr: '', sa: '', su: ''},
    {hour: '12:00', mo: 'BODY COMBAT', tu: '', we: '', th: '', fr: '', sa: '', su: ''},
    {hour: '14:00', mo: '', tu: '', we: '', th: '', fr: '', sa: '', su: ''},
    {hour: '16:00', mo: '', tu: '', we: '', th: '', fr: '', sa: '', su: ''},
    {hour: '18:00', mo: 'TRX', tu: '', we: '', th: '', fr: '', sa: '', su: ''},
    {hour: '20:00', mo: 'SPINNING', tu: 'SPINNING', we: 'SPINNING', th: 'SPINNING', fr: 'SPINNING', sa: 'SPINNING', su: 'SPINNING'},
    {hour: '21:00', mo: '', tu: '', we: '', th: '', fr: '', sa: '', su: ''},
    {hour: '22:00', mo: '', tu: 'TRX', we: '', th: 'TRX', fr: '', sa: 'TRX', su: ''},
  ];

}
