import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Token, TokenPriceDataFeed, TRACKED_TOKEN } from './tokenData';
import { map } from 'rxjs/operators';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexMarkers, ApexNoData, ApexResponsive, ApexStroke, ApexTheme, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import { ThemeChangerService } from 'src/app/services/theme-changer.service';

export type ChartOptions = {
  series: ApexAxisChartSeries
  chart: ApexChart
  dataLabels: ApexDataLabels
  stroke: ApexStroke
  theme: ApexTheme
  fill: ApexFill
  grid: ApexGrid
  xaxis: ApexXAxis
  yaxis: ApexYAxis
  tooltip: ApexTooltip,
  title: ApexTitleSubtitle,
  markers: ApexMarkers,
  colors: Array<string>,
  noData: ApexNoData,
  responsive: [ApexResponsive]
}

@Component({
  selector: 'price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.less']
})
export class PriceChartComponent implements OnInit {

  @ViewChild(ChartComponent) chart!: ChartComponent;
  public priceFeed: Observable<Token> = new Observable();
  public chartOptions: ChartOptions|null = null;
  private currentTheme: "light"|"dark"|undefined = "light";

  constructor(private tokenPriceDataFeed: TokenPriceDataFeed, private themeChangerService: ThemeChangerService) {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.currentTheme = "dark";
    }

    this.themeChangerService.currentTheme.subscribe((theme) => {
      theme === "light" || theme === "dark" ? this.currentTheme = theme : this.currentTheme = undefined
      if (this.chartOptions !== null) {
        if (theme === "light") {
          this.chartOptions.chart.background = "#FEE8E3"
          this.chartOptions.theme.mode = theme
          if (this.chartOptions.title.style !== undefined){
            this.chartOptions.title.style.color = "#000000"
          }
        }
        else if (theme === "dark") {
          this.chartOptions.chart.background = "#1d1d1d"
          this.chartOptions.theme.mode = theme
          if (this.chartOptions.title.style !== undefined){
            this.chartOptions.title.style.color = "#ffffff"
          }
        }

        this.chart.updateOptions(this.chartOptions)
      }
    });
  }

  ngOnInit(): void {
    this.priceFeed = this.tokenPriceDataFeed
      .watch(
        {
          tokenId: TRACKED_TOKEN,
          numberOfDays: 30
        }
      )
      .valueChanges
      .pipe(
        map((result) => <Token>((<any>result.data).token))
      )

    this.priceFeed.subscribe((data) => {
      let dates: Array<number> = new Array<number>();
      let prices: Array<number> = new Array<number>();
      let plotData: [[number, number|null]] = [[0,0]];

      data.tokenDayData.forEach(day => {
        dates.push(day.date * 1000)
        prices.push(day.priceUSD)
      })

      plotData.pop();
      dates.forEach((date,i) => {
        plotData.push([date, prices[i]])
      })

      this.chartOptions = {
        series: [
          {
            name: "VMP Price",
            data: plotData
          }
        ],
        chart: {
          height: 500,
          type: "area",
          toolbar: {
            autoSelected: "pan",
            show: false
          },
          background: this.currentTheme === 'dark' ? "#1d1d1d" : "#FEE8E3",
          animations: {
            speed: 500,

          }
        },
        dataLabels: {
          enabled: false
        },
        grid: {
          yaxis: {
            lines: {
              show: false
            }
          },
          padding: {
            left: 0,
            right: 0,
            bottom: 0
          }
        },
        fill: {
          colors: [
            "#ff79c6"
          ],
          gradient: {
            opacityFrom: 0.8,
            opacityTo: 0.2,
            type: "vertical"
          }
        },
        theme: {
          mode: this.currentTheme
        },
        stroke: {
          curve: "smooth",
          width: 3,
          colors: ["#ff79c6"]
        },
        xaxis: {
          type: "datetime",
          labels: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          }
        },
        yaxis: {
          decimalsInFloat: 2,
          tickAmount: 4,
          show: false
        },
        tooltip: {
          x: {
            format: "dd/MM/yy"
          },
          y: {
            formatter: function(val): string {
              return "$" + val.toPrecision(3).toString()
            }
          },
          theme: this.currentTheme === 'dark' ? "#212121" : "#ffffff"
        },
        title: {
          text: "Vampire Token Price",
          align: "center",
          style: {
            fontWeight: "bold",
            fontSize: "25px",
            color: this.currentTheme === 'dark' ? "#ffffff" : "#000000"
          }
        },
        markers: {
          colors: ["#ffb86c"],
          strokeColors: ["#ffb86c"],
          hover: {
          }
        },
        colors: ["#ff79c6"],
        noData: {
          text: "Data not available for the moment",
        },
        responsive: [
          {
            breakpoint: 768,
            options: {
              chart: {
                height: 300
              }
            }
          }
        ]
      }
    },
    (error) => this.chartOptions = {
      series: [
        {
          name: "VMP Price",
          data: []
        }
      ],
      chart: {
        height: 500,
        type: "area",
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        background: this.currentTheme === 'dark' ? "#1d1d1d" : "#FEE8E3",
        animations: {
          speed: 500,

        }
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        yaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          left: 0,
          right: 0,
          bottom: 0
        }
      },
      fill: {
        colors: [
          "#ff79c6"
        ],
        gradient: {
          opacityFrom: 0.8,
          opacityTo: 0.2,
          type: "vertical"
        }
      },
      theme: {
        mode: this.currentTheme
      },
      stroke: {
        curve: "smooth",
        width: 3,
        colors: ["#ff79c6"]
      },
      xaxis: {
        type: "datetime",
        labels: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        }
      },
      yaxis: {
        decimalsInFloat: 2,
        tickAmount: 4,
        show: false
      },
      tooltip: {
        x: {
          format: "dd/MM/yy"
        },
        y: {
          formatter: function(val): string {
            return "$" + val.toPrecision(3).toString()
          }
        },
        theme: this.currentTheme === 'dark' ? "#212121" : "#ffffff"
      },
      title: {
        text: "Vampire Token Price",
        align: "center",
        style: {
          fontWeight: "bold",
          fontSize: "25px",
          color: this.currentTheme === 'dark' ? "#ffffff" : "#000000"
        }
      },
      markers: {
        colors: ["#ffb86c"],
        strokeColors: ["#ffb86c"],
        hover: {
        }
      },
      colors: ["#ff79c6"],
      noData: {
        text: "Data not available for the moment",
      },
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 300
            }
          }
        }
      ]
    });
  }
}
