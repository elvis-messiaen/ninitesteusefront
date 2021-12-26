import { ParfumService } from './../../services/parfum.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parfum',
  templateUrl: './parfum.component.html',
  styleUrls: ['./parfum.component.scss'],
})
export class ParfumComponent implements OnInit {
  public parfum = [
    {
      title: 'test',
      descriptif: 'blabla blavlba ezzererereeze erzererezr rezre lorem',
    },
    {
      title: 'test2',
      descriptif:
        'lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad reiciendis sit est natus dolor tempora enim possimus perferendis, accusamus veniam fugit, cupiditate sequi repellat fugiat quibusdam? Adipisci dolor quasi nemo! ',
    },
    {
      title: 'test3',
      descriptif:
        'lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad reiciendis sit est natus dolor tempora enim possimus perferendis, accusamus veniam fugit, cupiditate sequi repellat fugiat quibusdam? Adipisci dolor quasi nemo! ',
    },
    {
      title: 'test4',
      descriptif:
        'lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad reiciendis sit est natus dolor tempora enim possimus perferendis, accusamus veniam fugit, cupiditate sequi repellat fugiat quibusdam? Adipisci dolor quasi nemo! ',
    },
    {
      title: 'test8',
      descriptif:
        'lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad reiciendis sit est natus dolor tempora enim possimus perferendis, accusamus veniam fugit, cupiditate sequi repellat fugiat quibusdam? Adipisci dolor quasi nemo! ',
    },
    {
      title: 'test4',
      descriptif:
        'lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad reiciendis sit est natus dolor tempora enim possimus perferendis, accusamus veniam fugit, cupiditate sequi repellat fugiat quibusdam? Adipisci dolor quasi nemo! ',
    },
    {
      title: 'test4',
      descriptif:
        'lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad reiciendis sit est natus dolor tempora enim possimus perferendis, accusamus veniam fugit, cupiditate sequi repellat fugiat quibusdam? Adipisci dolor quasi nemo! ',
    },
    {
      title: 'test4',
      descriptif:
        'lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad reiciendis sit est natus dolor tempora enim possimus perferendis, accusamus veniam fugit, cupiditate sequi repellat fugiat quibusdam? Adipisci dolor quasi nemo! ',
    },
    {
      title: 'test4',
      descriptif:
        'lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad reiciendis sit est natus dolor tempora enim possimus perferendis, accusamus veniam fugit, cupiditate sequi repellat fugiat quibusdam? Adipisci dolor quasi nemo! ',
    },
    {
      title: 'test4',
      descriptif:
        'lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad reiciendis sit est natus dolor tempora enim possimus perferendis, accusamus veniam fugit, cupiditate sequi repellat fugiat quibusdam? Adipisci dolor quasi nemo! ',
    },
    {
      title: 'testsansdescriptif',
    },
  ];

  constructor(private parfumService: ParfumService) {}

  ngOnInit(): void {}
}
