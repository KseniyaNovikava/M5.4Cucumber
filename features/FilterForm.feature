Feature: FilterForm

  Scenario Outline: FilterForm Statuses
    Given I open filter form
    When I filter by <option> "<status>" status
    Then <option> option is selected

  @ignore @green
    Examples: Green statuses
      | status         | option |
      | deliveryStatus | 0      |
      | staffingStatus | 0      |
      | forecastStatus | 0      |

   @amber
    Examples: Amber statuses
      | status         | option |
      | deliveryStatus | 1      |
      | staffingStatus | 1      |
      | forecastStatus | 1      |